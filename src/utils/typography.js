import Typography from "typography"
//import Theme from "typography-theme-stern-grove"
import Theme from "typography-theme-ocean-beach"

const typography = new Typography({
    ...Theme,
    overrideThemeStyles: () => ({
        a: {
            textDecoration: null,
            backgroundImage: null,
        }
    }),
})

export const { scale, rhythm, options } = typography
export default typography