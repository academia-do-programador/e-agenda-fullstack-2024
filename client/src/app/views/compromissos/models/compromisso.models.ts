export enum TipoLocalizacaoCompromissoEnum {
  Remoto,
  Presencial,
}

export interface InserirCompromissoViewModel {
  assunto: string;
  tipoLocal: TipoLocalizacaoCompromissoEnum;
  local?: string;
  link?: string;
  data: Date;
  horaInicio: string;
  horaTermino: string;
  contatoId?: string;
}

export interface CompromissoInseridoViewModel {
  assunto: string;
  tipoLocal: TipoLocalizacaoCompromissoEnum;
  local?: string;
  link?: string;
  data: Date;
  horaInicio: string;
  horaTermino: string;
  contatoId?: string;
}

export interface ListarCompromissoViewModel {
  id: string;
  assunto: string;
  data: Date;
  horaInicio: string;
  horaTermino: string;
}
