import request from '@/utils/request'

/**
 * 登录成功后获取用户信息（昵称、头像、权限集合和角色集合）
 */
export function getUserInfo() {
  return request({
    url: '/dev-api/test',
    method: 'get'
  });
}
