import type {Config} from 'tailwindcss'
import tailwindForms from '@tailwindcss/forms'

export default <Partial<Config>>{
    plugins: [tailwindForms],
    darkMode: 'class'
}