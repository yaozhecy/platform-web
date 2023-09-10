declare global {
    interface PageQuery {
        current: number;
        size: number;
    }

    interface PageResult<T> {
        list: T;
        total: number;
    }
}

export { };
