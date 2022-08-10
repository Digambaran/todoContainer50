import React from 'react'
import { useFederatedComponent } from 'yah-js-sdk'

const TodoItem50 = (props) => {
  const system = {
    url: `${process.env.BLOCK_ENV_URL_todoItem50}/remoteEntry.js`,
    scope: 'todoItem50',
    module: './todoItem50',
  }

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(
    system?.url,
    system?.scope,
    system?.module,
    React
  )

  // console.log(FederatedComponent);
  return (
    <React.Suspense fallback={''}>
      {errorLoading ? `Error loading module "${module}"` : FederatedComponent && <FederatedComponent {...props} />}
    </React.Suspense>
  )
}

export default todoItem50
