import { type UseCase } from '@template/backend/src/shared/core/UseCase';

export type UseCaseResponse<T extends UseCase<unknown, unknown>> = Awaited<
  ReturnType<T['execute']>
>;
