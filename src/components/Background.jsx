import { useMemo } from 'react';

// Coordinate system constants for gradient angle calculation
const COORDINATE_CENTER = 50; // Center point in 0-100 coordinate system
const RADIANS_TO_DEGREES = 180 / Math.PI;
const ANGLE_OFFSET = 90; // Offset to convert from atan2 to CSS gradient angle

/**
 * Background Component
 * 
 * A reusable background component that supports gradient rendering.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.fill - Whether the background should fill the full width
 * @param {number} props.height - Height of the background in rem units
 * @param {Object} props.gradient - Gradient configuration object
 * @param {boolean} props.gradient.display - Whether to display the gradient
 * @param {number} props.gradient.opacity - Opacity of the gradient (0-1)
 * @param {number} props.gradient.x - X position for gradient direction (0-100)
 * @param {number} props.gradient.y - Y position for gradient direction (0-100)
 * @param {string} props.gradient.colorStart - Start color token or CSS color
 * @param {string} props.gradient.colorEnd - End color token or CSS color
 * @param {React.ReactNode} props.children - Child elements to render inside the background
 * @param {string} props.className - Additional CSS classes
 */
function Background({ 
  fill = false, 
  height, 
  gradient = {},
  children,
  className = ''
}) {
  // Color token mapping for design system consistency
  const colorTokens = {
    'brand-background-strong': 'var(--color-brand-background-strong, #06b6d4)',
    'brand-background-weak': 'var(--color-brand-background-weak, rgba(6, 182, 212, 0.3))',
    'accent-background-strong': 'var(--color-accent-background-strong, #8b5cf6)',
    'accent-background-weak': 'var(--color-accent-background-weak, rgba(139, 92, 246, 0.3))',
    'neutral-background': 'var(--color-neutral-background, #0a0a0f)',
    'surface-background': 'var(--color-surface-background, rgba(0, 0, 0, 0.7))',
  };

  // Resolve color token to actual CSS value
  const resolveColor = (colorToken) => {
    if (!colorToken) return 'transparent';
    return colorTokens[colorToken] || colorToken;
  };

  // Extract gradient properties for dependency tracking
  const { display, opacity = 1, x = 50, y = 0, colorStart, colorEnd } = gradient || {};

  // Calculate gradient styles
  const gradientStyle = useMemo(() => {
    if (!display) return {};

    // Calculate gradient angle from x, y coordinates
    // x: 0 = left, 50 = center, 100 = right
    // y: 0 = top, 50 = center, 100 = bottom
    const angle = Math.atan2(y - COORDINATE_CENTER, x - COORDINATE_CENTER) * RADIANS_TO_DEGREES + ANGLE_OFFSET;
    
    const startColor = resolveColor(colorStart);
    const endColor = resolveColor(colorEnd);

    return {
      background: `linear-gradient(${angle}deg, ${startColor}, ${endColor})`,
      opacity,
    };
  }, [display, opacity, x, y, colorStart, colorEnd]);

  // Calculate container styles
  const containerStyle = useMemo(() => {
    const style = {
      position: 'relative',
      overflow: 'hidden',
    };

    if (fill) {
      style.width = '100%';
    }

    if (height !== undefined) {
      style.height = `${height}rem`;
    }

    return style;
  }, [fill, height]);

  const fillClass = fill ? 'background-fill' : '';
  const combinedClassName = `background-container ${fillClass} ${className}`.trim();

  return (
    <div className={combinedClassName} style={containerStyle}>
      {display && (
        <div 
          className="background-gradient"
          style={{
            ...gradientStyle,
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
          aria-hidden="true"
        />
      )}
      {children && (
        <div className="background-content" style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Background;
