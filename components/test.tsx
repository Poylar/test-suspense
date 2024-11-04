import { fetchWithDelay } from '@/fetch'
import React from 'react'

export const dynamic = 'force-dynamic'

export const Test = async () => {
	await fetchWithDelay()
	return <div>qwe</div>
}
