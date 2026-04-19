import { assertEqual, testRunner } from '../build/utils.test.ts';
import slashEscape from './main.ts';

// Type testing
(async () => {
  
  type Enforce<Provided, Expected extends Provided> = { provided: Provided, expected: Expected };
  
  type Tests = {
    1: Enforce<{ x: 'y' }, { x: 'y' }>,
  };
  
})();

testRunner([
  
  { name: 'basic', fn: async () => {
    
    assertEqual(
      slashEscape(`i said 'hey' and "he" said '''hoooo''' back to me`, `'"`),
      `i said #'hey#' and #"he#" said #'#'#'hoooo#'#'#' back to me`.replaceAll('#', '\\')
    );
    
  }}
  
]);