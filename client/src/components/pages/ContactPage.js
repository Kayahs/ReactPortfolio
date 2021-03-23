import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { FormContext } from 'lib'
import { SEND_EMAIL_MUTATION } from 'gql'
import { TextInput, SFormContainer, SubmitButton, SForm } from 'components'
import { useMutation } from '@apollo/client'

const ContactPage = () => {
  const [sendEmail] = useMutation(SEND_EMAIL_MUTATION)
  const labels = {
    fullname: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message'
  }

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      subject: '',
      message: ''
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      sendEmail({
        variables: {
          input: {
            to: 'akshaykmanchanda@gmail.com',
            subject: `${values.fullname}<${values.email}> ${values.subject}`,
            text: values.message,
            html: values.message
          }
        }
      })
      resetForm()
      setSubmitting(false)
      alert('Thank you for reaching out.')
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string().required('required'),
      email: Yup.string().email().required('required'),
      subject: Yup.string(),
      message: Yup.string().required('required')
    })
  })

  return (
    <FormContext.Provider value={{ ...formik, labels }}>
      <SFormContainer>
        <SForm onSubmit={formik.handleSubmit}>
          <TextInput name="fullname" width="70%" />
          <TextInput name="email" width="70%" />
          <TextInput name="subject" width="70%" />
          <TextInput name="message" width="70%" multiline={true} />
          <SubmitButton />
        </SForm>
      </SFormContainer>
    </FormContext.Provider>
  )
}

export default ContactPage
