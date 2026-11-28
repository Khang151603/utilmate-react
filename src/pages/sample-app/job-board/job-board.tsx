
import { useEffect, useState } from 'react'

const JOB_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/jobstories.json'
const JOB_URL = 'https://hacker-news.firebaseio.com/v0/item'
const JOBS_PER_PAGE = 6

type Job = {
    id: number
    by: string
    time: number
    title: string
}

export default function JobBoard() {
    const [idJobs, setIdJobs] = useState<number[]>([])
    const [jobsDetails, setJobsDetails] = useState<Job[]>([])
    const [limit, setLimit] = useState(6)

    useEffect(() => {
        async function getJobs() {
            try {
                const response = await fetch(JOB_STORIES_URL)
                const jobIds = await response.json()
                setIdJobs(jobIds)

                const selectedIdJobs = jobIds.slice(0, limit)

                const jobData = await Promise.all(
                    selectedIdJobs.map(async (id: number) => {
                    const response = await fetch(`${JOB_URL}/${id}.json`)
                    return response.json()
                    }),
                )

                setJobsDetails(jobData)
            } catch (error) {
                console.error(error)
            }
        }

        getJobs()
    }, [limit])

    return (
        <main className="min-h-screen bg-gray-100 p-3 text-black">
            <h1 className="mb-5 text-xl font-bold text-orange-600">
                Jobs Board
            </h1>

            {jobsDetails.map((job) => (
                <article key={job.id} className="mb-3 rounded border bg-white p-3">
                    <h2 className="font-bold">
                        {job.title}
                    </h2>

                    <p className="text-sm text-gray-600">
                        By {job.by} · {new Date
                        (job.time * 1000).toLocaleString()}
                    </p>
                </article>
            ))}

            {limit < idJobs.length && (
                <button
                    onClick={() => setLimit(limit + JOBS_PER_PAGE)}
                    className="rounded bg-orange-600 px-3 py-2 text-white"
                >
                    Load more jobs
                </button>
            )}
        </main>
    )
}
