import request from '@/utils/request';
import type { QueryParams, DataSource} from './types';

/**
 * 获取数据源信息列表
 */
export function page(params: QueryParams){
    return request({
        url: '/code-api/ds/page',
        method: 'post',
        data: params
    });
}

export function add(params:DataSource){
    return request({
        url: '/code-api/ds/page',
        method: 'post',
        data: params
    });
}