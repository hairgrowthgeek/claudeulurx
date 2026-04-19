import { theme } from '../theme';

export const Chip = ({ children, color = theme.accent }) => (
  <span
    style={{
      display: 'inline-block',
      background: color,
      color: theme.bg,
      fontFamily: theme.fontBody,
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
      padding: '10px 24px',
      borderRadius: 6,
    }}
  >
    {children}
  </span>
);
