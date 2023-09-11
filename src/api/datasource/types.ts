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
    /*数据源名称*/
    name: string,
    /*数据源类型*/
    dbType:string,
    /*数据库URL*/
    url:string,
    /*数据库账号*/
    account:string,
    /*数据库密码*/
    passwd:string,
    /*文件ID*/
    fileId:number
}