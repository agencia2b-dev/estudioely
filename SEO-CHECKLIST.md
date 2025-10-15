# ✅ Checklist de SEO - Estúdio Ely

## 🚀 Correções Implementadas

### 1. **Next.js Configuration**
- ✅ Removido `output: "export"` do `next.config.ts`
- ✅ Habilitado SSR (Server-Side Rendering) para melhor indexação

### 2. **Metadata Completa**
- ✅ Adicionado `metadataBase` com URL do site
- ✅ Implementado Open Graph tags
- ✅ Implementado Twitter Cards
- ✅ Adicionado keywords relevantes
- ✅ Configurado robots para permitir indexação
- ✅ Corrigido idioma de `en` para `pt-BR`

### 3. **Arquivos Essenciais**
- ✅ Criado `robots.txt` em `/public`
- ✅ Criado `sitemap.ts` dinâmico
- ✅ Criado `manifest.ts` para PWA

### 4. **Estrutura de Pastas**
- ✅ Criada pasta `/public` para arquivos estáticos

---

## ⚠️ Ações Necessárias ANTES do Deploy

### 1. **Google Search Console**
Após o deploy, você DEVE:
1. Acessar: https://search.google.com/search-console
2. Adicionar sua propriedade: `https://estudioely.com.br`
3. Verificar propriedade (método HTML tag ou DNS)
4. Copiar o código de verificação
5. Substituir em `app/layout.tsx` linha 69:
   ```typescript
   verification: {
     google: 'SEU-CODIGO-AQUI', // ← Substituir!
   },
   ```

### 2. **Imagem Open Graph**
Criar uma imagem 1200x630px e hospedar em:
- `https://estudioely.com.br/og-image.jpg`
- Ou atualizar URLs em `layout.tsx` (linhas 50 e 61)

### 3. **Favicon**
Adicionar favicon local em `/public/favicon.ico`

### 4. **Sitemap**
Após deploy, submeter sitemap no Google Search Console:
- URL: `https://estudioely.com.br/sitemap.xml`

---

## 📊 Melhorias Adicionais Recomendadas

### Performance
```bash
# Instalar dependências de otimização
npm install sharp  # Para otimização de imagens
```

### Schema.org (JSON-LD)
Adicionar na homepage (`app/page.tsx`):
```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Estúdio Ely",
      "description": "Estúdio especializado em color grading",
      "url": "https://estudioely.com.br",
      "logo": "https://estudioely.com.br/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-11-99901-6812",
        "contactType": "customer service",
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
      },
      "sameAs": [
        "https://instagram.com/estudioely",
        "https://linkedin.com/company/estudioely"
      ]
    })
  }}
/>
```

### Analytics
```bash
# Instalar Google Analytics
npm install @next/third-parties
```

Adicionar em `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

// No body:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

---

## 🔍 Teste de SEO

### Ferramentas para Testar:
1. **Google Search Console** - https://search.google.com/search-console
2. **PageSpeed Insights** - https://pagespeed.web.dev/
3. **Google Rich Results Test** - https://search.google.com/test/rich-results
4. **Mobile-Friendly Test** - https://search.google.com/test/mobile-friendly

### Comandos Úteis:
```bash
# Build de produção
npm run build

# Testar localmente
npm start

# Verificar sitemap
curl https://estudioely.com.br/sitemap.xml

# Verificar robots.txt
curl https://estudioely.com.br/robots.txt
```

---

## 📝 Metadata por Página

### Páginas que PRECISAM de metadata:
- ✅ Homepage - OK
- ⚠️ Catálogo - Adicionado (mas não funciona em 'use client')
- ❌ Sobre - PRECISA adicionar
- ❌ Contato - PRECISA adicionar
- ❌ Obra/[slug] - PRECISA adicionar

**Solução:** Criar arquivos `layout.tsx` em cada pasta de rota com metadata específica.

---

## 🎯 Próximos Passos

1. ✅ Commit e push das alterações
2. ⚠️ Deploy da aplicação
3. ⚠️ Adicionar código do Google Search Console
4. ⚠️ Criar imagem Open Graph
5. ⚠️ Submeter sitemap no Google
6. ⚠️ Testar com ferramentas de SEO
7. ⚠️ Adicionar Google Analytics
8. ⚠️ Implementar Schema.org

---

## 🚨 IMPORTANTE

**Por que o Google não indexava antes:**
1. ❌ `output: "export"` gerava site estático sem SSR
2. ❌ Sem robots.txt
3. ❌ Sem sitemap.xml
4. ❌ Metadata incompleta
5. ❌ Sem Open Graph tags

**Agora está CORRIGIDO! ✅**
