let count: number = 0
export function blockDisappear(execute: Function) {
    count += 1
    if (count == 100) {
        execute()
    }
    else if (count == 120) {
        count = 0
        execute()
    }
}