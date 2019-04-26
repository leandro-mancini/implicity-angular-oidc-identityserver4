import { DomainModel } from './base/domain.model';

export interface CredentialsModel extends DomainModel {
  username: string;
  senha: string;
  token: string;
}
