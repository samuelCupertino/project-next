export const utils = { 
    applySuffix(prop:number|string|undefined, suffix='px') {
        return prop === undefined ? '' : prop + (isNaN(+prop) ? '' : suffix)
    },

    clockProps(props:number[]|string[] = [], suffix: string) {
        return props.map(prop => this.applySuffix(prop, suffix)).join(' ')
    } 
}