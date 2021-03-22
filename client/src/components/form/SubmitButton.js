import React, { useContext } from 'react'
import { FormContext } from 'lib'
import Button from '@material-ui/core/Button'

const SubmitButton = ({ text = 'Submit' }) => {
  const data = useContext(FormContext)
  return (
    <Button variant="contained" color="primary" type="submit" disabled={data.isSubmitting}>
      {text}
    </Button>
  )
}

export default SubmitButton
