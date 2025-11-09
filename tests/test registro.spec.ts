import { test, expect } from '@playwright/test';

 test(' test 1:Validar registro con datos incorrectos', async ({ page }) => {
    //navegar a la pagina de banco caja social
  await page.goto('https://www.bancocajasocial.com/');
  await page.getByText('Ingresar al Portal Ingresar').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Ingresar al Portal Personas' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Registrarse' }).click();
  await page1.locator('span').nth(4).click();
  await page1.getByRole('button', { name: 'Continuar' }).click();
  await page1.locator('#username-input').nth(1).fill('1013590763');
  await page1.getByRole('textbox', { name: 'Últimos 6 números de tarjeta' }).click();
  await expect(page.getByText('Datos incorrectos. Recuerde')).toContainText('Datos incorrectos');

  });
  
test('test 2: Validar registro de forma exitosa', async ({ page }) => {
 await page.goto('https://www.bancocajasocial.com/');
  await page.getByText('Ingresar al Portal Ingresar').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Ingresar al Portal Personas' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Registrarse' }).click();
  await page1.locator('span').nth(4).click();
  await page1.getByRole('button', { name: 'Continuar' }).click();
  await page1.locator('#username-input').nth(1).fill('CC1013590763');
  await page1.getByRole('textbox', { name: 'Últimos 6 números de tarjeta' }).click();
  await page1.getByRole('textbox', { name: 'Últimos 6 números de tarjeta' }).fill('852163');
  await page1.getByRole('textbox', { name: 'Clave de tarjeta débito' }).fill('0301');
  await page1.getByRole('button', { name: 'Continuar' }).click();

  });

  test.beforeEach(async ({ page }) => {
    // Navegar a la página principal
    await page.goto('https://www.bancocajasocial.com/');
    await page.getByText('Ingresar al Portal Ingresar').click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Ingresar al Portal Personas' }).click();
    const page1 = await page1Promise;
    await page.getByRole('link', { name: 'Registrarse' }).click();
    
    // Esperar a que la página cargue completamente
    await page.waitForLoadState('networkidle');
  });

  test('test 3: Validar campos obligatorios en el registro', async ({ page }) => {
    //diligenciar formulario de registro
  await page.locator('#username-input').nth(1).fill('CC1013590763');
  await page.getByRole('textbox', { name: 'Últimos 6 números de tarjeta' }).click();
  await page.getByRole('textbox', { name: 'Últimos 6 números de tarjeta' }).fill('852163');
  await page.getByRole('button', { name: 'Continuar' }).click();
  const mensajeError = page.locator('Campo obligatorio');
  await expect(mensajeError).toBeVisible();
  await expect(mensajeError).toHaveClass(/Campo obligatorio/);
  await expect(mensajeError).toContainText('Campo obligatorio');



  });




