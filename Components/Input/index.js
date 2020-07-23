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
    <div bg={bg} error={error} className="wrap">
      {title && (
        <span bg={bg} error={error}>
          {title}
        </span>
      )}
      {type === 'TextInput' ? (
        <input
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
        <textarea
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
      <style jsx>{`
        .wrap {
          position: relative;
          border-radius: 10px;
          width: 100%;
          margin: 10px 0;
          background-color: 'transparent';
          border-color: '#000';
          border: 1px solid #ccc;
          /* justify-content: center; */
          /* align-items: center; */
        }

        input {
          width: 100%;
          height: 50px;
          font-size: 16px;
          color: #fff;
          background-color: transparent;
          -webkit-appearance: none;
          border: 0;
          outline: 0;
          background-color: transparent;
          border-color: transparent;
          padding: 0 10px;
        }

        textarea {
          padding: 10px;
          width: 100%;
          font-size: 16px;
          color: #fff;
          background-color: transparent;
          border-color: transparent;
        }

        span {
          font-size: 14px;
          color: #fff;
          position: absolute;
          top: -10px;
          left: 10px;
          padding: 0 5px;
          background-color: #172a3a;
          z-index: 10;
        }
        .error {
          font-size: 18px;
          color: red;
          position: absolute;
          top: -10px;
          left: 10px;
          padding: 0 5px;
          font-size: 14px;
          background-color: #172a3a;
          z-index: 10;
        }
      `}</style>
    </div>
  );
}
