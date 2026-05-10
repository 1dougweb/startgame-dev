import React, { useLayoutEffect, useRef, useCallback } from 'react';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full h-[400px] md:h-[600px] my-10 p-0 rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] box-border origin-top will-change-transform border border-white/10 ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  onStackComplete
}) => {
  const stackCompletedRef = useRef(false);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const offsetsRef = useRef([]);

  const calculateProgress = (scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  };

  const parsePercentage = (value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  };

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = document.querySelector('.scroll-stack-end');
    const endElementTop = endElement ? endElement.getBoundingClientRect().top + window.scrollY : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = offsetsRef.current[i];
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - (containerHeight / 2) - (cardsRef.current.length * itemStackDistance);

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = { translateY, scale, rotation };
      const last = lastTransformsRef.current.get(i);

      if (!last || Math.abs(last.translateY - translateY) > 0.1 || Math.abs(last.scale - scale) > 0.001) {
        card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, rotationAmount, onStackComplete]);

  useLayoutEffect(() => {
    const cards = Array.from(document.querySelectorAll('.scroll-stack-card'));
    cardsRef.current = cards;
    
    const updateOffsets = () => {
      offsetsRef.current = cards.map(card => {
        const rect = card.getBoundingClientRect();
        return rect.top + window.scrollY;
      });
    };

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
    });

    // Initial calculation with a slight delay to ensure layout is ready
    const timer = setTimeout(() => {
      updateOffsets();
      updateCardTransforms();
    }, 100);

    const handleScroll = () => {
      // Use requestAnimationFrame for smooth native scroll updates
      requestAnimationFrame(updateCardTransforms);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
      updateOffsets();
      updateCardTransforms();
    });

    window.addEventListener('load', () => {
      updateOffsets();
      updateCardTransforms();
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateOffsets);
      window.removeEventListener('load', updateOffsets);
    };
  }, [itemDistance, updateCardTransforms]);

  return (
    <div className={`relative w-full overflow-visible ${className}`}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end w-full h-20" />
      </div>
    </div>
  );
};

export default ScrollStack;
