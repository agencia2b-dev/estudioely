# 🖼️ Guia de Criação da Imagem Open Graph

## 📐 Especificações Técnicas

- **Dimensões:** 1200 x 630 pixels
- **Formato:** JPG ou PNG
- **Tamanho máximo:** 8 MB (recomendado: < 300 KB)
- **Proporção:** 1.91:1

---

## 🎨 Opção 1: Usar Template HTML (Recomendado)

### Passo a Passo:

1. **Abrir o template:**
   ```
   Abra o arquivo: public/og-image-template.html
   No navegador (duplo clique ou arraste para o Chrome)
   ```

2. **Capturar screenshot:**
   - Pressione `F11` para tela cheia
   - Use `Win + Shift + S` (Windows) ou ferramenta de screenshot
   - Selecione apenas a área do card (1200x630px)
   - Salve como: `og-image.jpg`

3. **Salvar no projeto:**
   ```
   Coloque o arquivo em: C:\projetos\estudioely\public\og-image.jpg
   ```

4. **Verificar:**
   - Tamanho: 1200 x 630 pixels
   - Formato: JPG
   - Peso: < 300 KB

---

## 🎨 Opção 2: Usar Ferramenta Online

### Ferramentas Recomendadas:

1. **Canva** (https://canva.com)
   - Template: "Facebook Post" ou "Open Graph"
   - Dimensões customizadas: 1200 x 630 px
   - Usar cores: Preto (#000000) e Vermelho (#ff0000)

2. **Figma** (https://figma.com)
   - Criar frame: 1200 x 630 px
   - Design minimalista com logo e tagline
   - Exportar como JPG (qualidade 80%)

3. **Photoshop/GIMP**
   - Novo documento: 1200 x 630 px, 72 DPI
   - Background: Gradiente preto
   - Texto: "Estúdio Ely - Color Grading Profissional"
   - Salvar para web: JPG, qualidade 80%

---

## 🎨 Opção 3: Usar Imagem Existente

Se você já tem uma imagem do estúdio:

1. Redimensionar para 1200 x 630 px
2. Adicionar overlay escuro (opacidade 50%)
3. Adicionar texto: "Estúdio Ely - Color Grading"
4. Salvar como JPG

---

## ✅ Checklist Final

Antes de fazer commit, verifique:

- [ ] Arquivo está em: `public/og-image.jpg`
- [ ] Dimensões: 1200 x 630 pixels
- [ ] Formato: JPG
- [ ] Tamanho: < 300 KB
- [ ] Texto legível em thumbnail pequeno
- [ ] Logo/marca visível
- [ ] Cores consistentes com a marca (preto e vermelho)

---

## 🧪 Testar Open Graph

Após fazer upload, teste em:

1. **Facebook Debugger:**
   https://developers.facebook.com/tools/debug/

2. **Twitter Card Validator:**
   https://cards-dev.twitter.com/validator

3. **LinkedIn Post Inspector:**
   https://www.linkedin.com/post-inspector/

4. **Open Graph Check:**
   https://www.opengraph.xyz/

---

## 📝 Elementos Recomendados na Imagem

### Obrigatórios:
- ✅ Logo "Estúdio Ely"
- ✅ Tagline: "Color Grading Profissional"
- ✅ Background escuro (preto)
- ✅ Destaque vermelho (#ff0000)

### Opcionais:
- Subtítulo: "Pós-Produção Audiovisual"
- Ícones de software (DaVinci, Premiere)
- Elementos geométricos decorativos
- Gradientes sutis

---

## 🚀 Após Criar a Imagem

1. Salvar em: `public/og-image.jpg`
2. Fazer commit:
   ```bash
   git add public/og-image.jpg
   git commit -m "feat: Adicionar imagem Open Graph"
   git push
   ```
3. Fazer deploy
4. Testar com ferramentas acima

---

## 💡 Dicas de Design

- **Contraste:** Texto branco em fundo escuro
- **Hierarquia:** Logo maior, tagline menor
- **Espaçamento:** Margens generosas (80px)
- **Legibilidade:** Fonte sans-serif, tamanho 48px+
- **Simplicidade:** Menos é mais, evite poluição visual
- **Identidade:** Manter cores da marca (preto + vermelho)

---

## 🔗 URLs da Imagem

Após deploy, a imagem estará em:
- Produção: `https://estudioely.com.br/og-image.jpg`
- Local: `http://localhost:3000/og-image.jpg`

Já configurado em `app/layout.tsx` linhas 50 e 61.
