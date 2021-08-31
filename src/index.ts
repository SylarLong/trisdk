import got from 'got';

interface ITrisdk {
  readonly version: string;

  verifyEndpoint: () => Promise<boolean>;
}

export type SDKProps = {
  tenantId: string;
  endpoint: string;
};

class Trisdk implements ITrisdk {
  public readonly version: string = '1.0.0';
  private tenantId: string;
  private endpoint: string;

  public get currentTenantId(): string {
    return this.tenantId;
  }

  public get currentEndpoint(): string {
    return this.endpoint;
  }

  constructor(props: SDKProps) {
    this.tenantId = props.tenantId;
    this.endpoint = props.endpoint;
  }

  async verifyEndpoint(): Promise<boolean> {
    try {
      const result = await got.get(this.endpoint);
      return result.statusCode >= 200 && result.statusCode < 400;
    } catch (err) {
      return false;
    }
  }
}

export default Trisdk;
