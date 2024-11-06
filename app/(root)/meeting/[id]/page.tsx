import { useUser } from '@clerk/nextjs';
import React from 'react'

export default function Meeting({ params }: { params: { id: string } }) {
  const { user, isLoaded } = useUser();
  
  return (
    <div>Meeting Room: #{params.id}</div>
  )
}
