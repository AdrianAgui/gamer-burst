import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error: any = useRouteError()
  console.error(error)

  return (
    <div id='error-page' className='h-[90vh] flex flex-col justify-center items-center text-2xl'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='mt-3 font-semibold'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
