import React, { useContext } from 'react'
import { FormContext } from 'lib'
import TextField from '@material-ui/core/TextField'
import { STextFieldContainer } from 'components'

const TextInput = ({ name, width, multiline = false }) => {
  const data = useContext(FormContext)

  const change = (name, e) => {
    e.persist()
    data.handleChange(e)
    data.setFieldTouched(name, true, false)
  }
  return (
    <STextFieldContainer width={width}>
      {!multiline && (
        <TextField
          fullWidth
          id={name}
          name={name}
          type={name === 'password' ? name : 'text'}
          helperText={data.touched[name] ? data.errors[name] : ''}
          error={data.touched[name] && Boolean(data.errors[name])}
          label={data.labels[name]}
          value={data.values[name]}
          onChange={change.bind(null, name)}
          variant="outlined"
        />
      )}
      {multiline && (
        <TextField
          fullWidth
          id={name}
          name={name}
          type={name === 'password' ? name : 'text'}
          helperText={data.touched[name] ? data.errors[name] : ''}
          error={data.touched[name] && Boolean(data.errors[name])}
          label={data.labels[name]}
          value={data.values[name]}
          onChange={change.bind(null, name)}
          multiline
          rows={4}
          variant="outlined"
        />
      )}
    </STextFieldContainer>
  )
}

export default TextInput
