import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'

import { Input } from '@/components/ui/input'
import { LuSave, LuEye, LuEyeOff } from 'react-icons/lu'

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [pass, setPass] = useState("")
  const [pass2, setPass2] = useState("")

  const [showPass, setShowPass] = useState<boolean>(false)
  const [showPass2, setShowPass2] = useState<boolean>(false)

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Fresh bread is waiting!</CardTitle>
        <CardDescription className='mb-10 text-xl'>
          Sign up and grab your favorites
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor='name'>Full Name</FieldLabel>
              <Input id='name' type='text' placeholder='John Doe' required />
            </Field>
            <Field>
              <FieldLabel htmlFor='email'>Email</FieldLabel>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor='password'>Password</FieldLabel>
              <div className="relative">
                <Input
                  id="Password"
                  type={showPass ? "text" : "password"}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPass ? <LuEye /> : <LuEyeOff />}
                </button>
              </div>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor='retypePassword'>
                Retype Password
              </FieldLabel>
              <div className="relative">
                <Input
                  id="retypePassword"
                  type={showPass2 ? "text" : "password"}
                  value={pass2}
                  onChange={(e) => setPass2(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPass2(!showPass2)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPass2 ? <LuEye /> : <LuEyeOff />}
                </button>
              </div>
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type='submit'>Create Account</Button>

                <FieldDescription className='px-6 text-center'>
                  Already have an account? <Link to='/login'>Login</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
