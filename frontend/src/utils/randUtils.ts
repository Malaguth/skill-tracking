export function randomSize(): 'small' | 'medium' | 'large' {
    const sizes = ['small', 'medium', 'large']
    const randomIndex = Math.floor(Math.random() * sizes.length)
    return sizes[randomIndex] as 'small' | 'medium' | 'large'
}
