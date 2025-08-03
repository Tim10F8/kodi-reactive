export interface Result<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PagedResult<T> {
  items: T[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  totalPages: number;
}

export interface AuditableEntity {
  createdAt: Date;
  updatedAt: Date;
  createdBy?: string;
  updatedBy?: string;
}

export interface SoftDeletableEntity {
  deletedAt?: Date;
  deletedBy?: string;
  isDeleted: boolean;
}
