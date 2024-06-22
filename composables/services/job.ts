interface ApiResponse<T> {
  'job-count': number
  jobs: Array<T>
}

interface JobCategory {
  id: number
  name: string
  slug: string
}

interface JobListQuery {
  category?: string
  company_name?: string
  search?: string
  limit?: number
}

export const useJobService = () => {
  const RESOURSE = '/remote-jobs'

  async function categories(): Promise<any> {
    return useApi(`${RESOURSE}/categories`)
  }

  async function list(query?: JobListQuery): Promise<any> {
    return useApi(RESOURSE, { query })
  }

  async function detail(query?: JobListQuery): Promise<any> {
    return useApi(RESOURSE, { query })
  }

  return { categories, list, detail }
}
