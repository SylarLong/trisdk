import Trisdk from '../src/index';

describe('测试乘法云SDK', () => {
  it('实例化SDK应该成功', () => {
    const tenantId = 'test123';
    const endpoint = 'https://chengfayun.com/';
    const trisdk = new Trisdk({ tenantId, endpoint });

    expect(trisdk.currentTenantId).toBe(tenantId);
    expect(trisdk.currentEndpoint).toBe(endpoint);
  });

  it('若endpoint正确应该验证通过', async () => {
    const tenantId = 'test123';
    const endpoint = 'https://chengfayun.com/';
    const trisdk = new Trisdk({ tenantId, endpoint });
    const result = await trisdk.verifyEndpoint();

    expect(result).toBe(true);
  });

  it('若endpoint不正确应该验证失败', async () => {
    const tenantId = 'test123';
    const endpoint = 'abc';
    const trisdk = new Trisdk({ tenantId, endpoint });
    const result = await trisdk.verifyEndpoint();

    expect(result).toBe(false);
  });
});
