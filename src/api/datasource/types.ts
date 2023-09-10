/**
 * 查询参数
 */
export interface QueryParams extends PageQuery {
    name?: string
}

/**
 * 数据源数据
 */
export interface DataSource {
    code: string
    name: string
}