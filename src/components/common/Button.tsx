import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import { colors, spacing, borderRadius, typography } from '../../theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  variant = 'primary',
  disabled,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
        (disabled || loading) && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={colors.button.text} />
      ) : (
        <Text
          style={[
            styles.buttonText,
            variant === 'secondary' && styles.secondaryButtonText,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  primaryButton: {
    backgroundColor: colors.button.primary,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.button.primary,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    ...typography.button,
    color: colors.button.text,
  },
  secondaryButtonText: {
    color: colors.button.primary,
  },
});