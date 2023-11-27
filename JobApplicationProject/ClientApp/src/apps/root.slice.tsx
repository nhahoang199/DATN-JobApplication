// root.slice.ts
import { JobApplicationState } from './jobApplication.slice'
import { NavigationItem } from './navBar.slice'
import { authState } from './auth.slice'
import { ILoaderState } from './loading.slice'

export type RootState = {
    jobApplication: JobApplicationState
    navigation: NavigationItem[]
    auth: authState
    loading: ILoaderState
}
