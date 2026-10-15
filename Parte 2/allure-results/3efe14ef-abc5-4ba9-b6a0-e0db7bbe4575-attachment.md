# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/scenarioB.spec.ts >> Complete purchase flow
- Location: tests/scenarioB.spec.ts:15:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.sweet-alert')
Timeout: 5000ms
- Expected substring  -  1
+ Received string     + 31

- Texto Incorrecto
+
+       
+         
+         
+       
+     
+       
+       
+     
+       
+       
+
+       
+       
+     Thank you for your purchase!
+     Id: 4999619Amount: 0 USDCard Number: 4111111111111111Name: WalterDate: 14/9/2026
+     
+       
+       
+          Not valid
+       
+     
+       Cancel
+       
+         OK
+           
+           
+           
+         
+       
+     

Call log:
  - Expect "toContainText" locator('.sweet-alert') with timeout 5000ms
  - waiting for locator('.sweet-alert')
    5 × locator resolved to <div tabindex="-1" data-timer="null" data-custom-class="" data-animation="pop" data-has-done-function="true" data-has-cancel-button="false" data-has-confirm-button="true" data-allow-outside-click="false" class="sweet-alert  showSweetAlert">…</div>
      - unexpected value "
      
        
        
      
    
      
      
    
      
      

      
      
    Thank you for your purchase!
    Id: 4999619Amount: 0 USDCard Number: 4111111111111111Name: WalterDate: 14/9/2026
    
      
      
         Not valid
      
    
      Cancel
      
        OK
          
          
          
        
      
    "
    9 × locator resolved to <div tabindex="-1" data-timer="null" data-custom-class="" data-animation="pop" data-has-done-function="true" data-has-cancel-button="false" data-has-confirm-button="true" data-allow-outside-click="false" class="sweet-alert  showSweetAlert visible">…</div>
      - unexpected value "
      
        
        
      
    
      
      
    
      
      

      
      
    Thank you for your purchase!
    Id: 4999619Amount: 0 USDCard Number: 4111111111111111Name: WalterDate: 14/9/2026
    
      
      
         Not valid
      
    
      Cancel
      
        OK
          
          
          
        
      
    "

```

```yaml
- heading "Thank you for your purchase!" [level=2]
- paragraph: "Id: 4999619 Amount: 0 USD Card Number: 4111111111111111 Name: Walter Date: 14/9/2026"
- button "OK"
```

# Test source

```ts
  1  | import { test, expect }
  2  | from "@playwright/test";
  3  | 
  4  | import { HomePage }
  5  | from "../pages/HomePage";
  6  | 
  7  | import { ProductPage }
  8  | from "../pages/ProductPage";
  9  | 
  10 | import { CartPage } from "../pages/CartPage";
  11 | 
  12 | import { PlaceOrderModal }
  13 | from "../pages/PlaceOrderModal";
  14 | 
  15 | test(
  16 |   "Complete purchase flow",
  17 |   async ({ page }) => {
  18 | 
  19 |     const home =
  20 |       new HomePage(page);
  21 | 
  22 |     const product =
  23 |       new ProductPage(page);
  24 | 
  25 |    const cart = new CartPage(page);
  26 | 
  27 |     const modal =
  28 |       new PlaceOrderModal(page);
  29 | 
  30 |     await home.navigate();
  31 | 
  32 |     await page.click(
  33 |       "text=Samsung galaxy s6"
  34 |     );
  35 | 
  36 |     await product.addToCart();
  37 | 
  38 |     await cart.openCart();
  39 | 
  40 |     await cart.placeOrder();
  41 | 
  42 |     await modal.completeOrder();
  43 | 
  44 |     await expect(
  45 |       page.locator(
  46 |         ".sweet-alert"
  47 |       )
  48 |     )
> 49 |     .toContainText(
     |      ^ Error: expect(locator).toContainText(expected) failed
  50 |       "Texto Incorrecto"  //Texto Incorrecto Thank you for your purchase!
  51 |     );
  52 | 
  53 |   });
```