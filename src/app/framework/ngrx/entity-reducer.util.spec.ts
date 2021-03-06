// testing
import { t } from '~/app/framework/testing';

// module
import { entityErrorFn, entityResetFn, entityStartProcessingFn, entityStopProcessingFn } from './entity-reducer.util';

const VALID_ID = '100000000000000000000001';
const ERROR_MESSAGE = 'Something went wrong.';

t.describe('ng-seed/universal', () => {
  t.describe('framework', () => {
    t.describe('ngrx: entityStartProcessingFn', () => {
      t.it('should set `isProcessing` to true', () => {
        const preState = {};
        const postState = entityStartProcessingFn(preState);

        t.e(postState)
          .toEqual(
            {
              ...preState,
              ids: [],
              entities: {},
              isProcessing: true,
              selectedId: undefined
            }
          );
      });
    });

    t.describe('ngrx: entityStopProcessingFn', () => {
      t.it('should set `isProcessing` to false', () => {
        const preState = {};
        const postState = entityStopProcessingFn(preState);

        t.e(postState)
          .toEqual(
            {
              ...preState,
              isProcessing: false
            }
          );
      });
    });

    t.describe('ngrx: entityErrorFn', () => {
      t.it('should set the `error`', () => {
        const preState = {};
        const postState = entityErrorFn(preState)(ERROR_MESSAGE);

        t.e(postState)
          .toEqual(
            {
              ...preState,
              ids: [],
              entities: {},
              isProcessing: false,
              selectedId: undefined,
              error: ERROR_MESSAGE
            }
          );
      });
    });

    t.describe('ngrx: entityResetFn', () => {
      t.it('should set revert the `selectedId` and set the `error`', () => {
        const preState = {};
        const postState = entityResetFn(preState)({
          id: VALID_ID,
          error: ERROR_MESSAGE
        });

        t.e(postState)
          .toEqual(
            {
              ...preState,
              isProcessing: false,
              selectedId: VALID_ID,
              error: ERROR_MESSAGE
            }
          );
      });
    });
  });
});
