import { Controller, useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputField from '../../components/ui/input-field'

/*
combo form: react hook form + yup/zod
*/

type FormValues = {
  name: string,
  email: string,
  city?: string,
  password: string
}

const schema = yup
  .object({
    name: yup.string().required().min(3).max(10),
    email: yup.string().required().email(),
    city: yup.string().optional(),
    password: yup.string().required()
  })
  .required()

function UserHookForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { 
      name: "",
      email: "",
      city: "",
      password: ""
    },
  })
  
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <div>
      <h1>UserHookForm</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        Name: 
        <input 
          type="text"  
          {...register('name')}
        /> <br />
        {errors.name && <p role="alert">{errors.name.message}</p>}

        Email: 
        <input 
          type="email" 
          {...register('email')}
        /> <br />
        {errors.email && <p role="alert">{errors.email.message}</p>}

        City: 
        <select
          {...register('city')}
        >
          <option value="hcm">HCM</option>
          <option value="hn">HN</option>
        </select> <br />
        {errors.city && <p role="alert">{errors.city.message}</p>}

        Password:
        <Controller
          name="password"
          control={control}
          render={({ field }) => <InputField type="password" {...field} />}
        />
        {errors.password && <p role="alert">{errors.password.message}</p>}

        <br />

        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default UserHookForm