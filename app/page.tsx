import { Sidebar } from '@/components/sidebar'
import { Test } from '@/components/test'
import { Title } from '@/components/title'
import { Suspense } from 'react'

const Home = ({ searchParams }: { searchParams: Promise<{ foo: string }> }) => {
	return (
		<div className=''>
			<Sidebar />
			<Title />
			<Suspense fallback={<div>...loading</div>}>
				<Test params={searchParams} />
			</Suspense>
		</div>
	)
}

export default Home
