import React from 'react';

import { Input, Text, Container, TextArea } from './styles';

export default function InputField({
  bg,
  title,
  type,
  error,
  onChange,
  value,
  placeholder,
  rows,
  numberOfLines,
  maxLength,
  multiline,
  autoFocus,
  capitalize,
  props,
}) {
  return (
    <Container bg={bg} error={error}>
      {title && (
        <Text bg={bg} error={error}>
          {title}
        </Text>
      )}
      {type === 'TextInput' ? (
        <Input
          props
          required
          value={value}
          onChange={onChange}
          textAlignVertical="top"
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          placeholder={placeholder}
          error={error}
          multiline={multiline}
        />
      ) : (
        <TextArea
          required
          onChange={onChange}
          rows={rows}
          maxLength={maxLength}
          value={value}
          bg={bg}
          resize="false"
          placeholder={placeholder}
          error={error}
          autoFocus={autoFocus}
          autoCapitalize={capitalize || 'none'}
          secureTextEntry={type === 'Password'}
        />
      )}
    </Container>
  );
}
