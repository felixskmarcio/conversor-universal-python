# Conversor Universal - Next.js

Uma versão modernizada do conversor de documentos, construída com Next.js 14, TypeScript, shadcn/ui e Tailwind CSS.

## 🚀 Funcionalidades

- **Interface Moderna**: Design responsivo e elegante com shadcn/ui
- **Drag & Drop**: Arraste e solte arquivos para upload
- **Conversão Inteligente**: Seleção automática do formato de destino baseado no arquivo de origem
- **Formatos Suportados**: PDF, DOCX, TXT, HTML, Markdown
- **Feedback Visual**: Barra de progresso e alertas de status
- **Download Direto**: Download automático do arquivo convertido
- **Validação de Arquivos**: Limite de 16MB e tipos de arquivo suportados

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **shadcn/ui** - Componentes UI modernos
- **Tailwind CSS** - Estilização utilitária
- **Lucide React** - Ícones
- **React Dropzone** - Upload de arquivos com drag & drop

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Servidor Python do conversor rodando na porta 5000

## 🚀 Como Executar

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse a aplicação:**
   ```
   http://localhost:3000
   ```

4. **Certifique-se que o backend Python está rodando:**
   ```bash
   # No diretório raiz do projeto Python
   python conversor_melhorado.py
   ```

## 🎨 Componentes UI

O projeto utiliza os seguintes componentes do shadcn/ui:

- `Card` - Containers principais
- `Button` - Botões interativos
- `Progress` - Barra de progresso
- `Alert` - Mensagens de feedback
- `Badge` - Tags de formato
- `Label` - Rótulos de formulário

## 🔧 Estrutura do Projeto

```
conversor-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/
│   │       ├── alert.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── progress.tsx
│   │       └── separator.tsx
│   └── lib/
│       └── utils.ts
├── components.json
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🌟 Melhorias Implementadas

### Interface do Usuário
- Design moderno com gradientes e efeitos visuais
- Componentes acessíveis e responsivos
- Feedback visual em tempo real
- Animações suaves e transições

### Experiência do Usuário
- Upload por drag & drop
- Seleção automática de formato de destino
- Validação de arquivos em tempo real
- Indicadores de progresso
- Mensagens de erro claras

### Funcionalidades Técnicas
- TypeScript para maior segurança de tipos
- Componentes reutilizáveis
- Estado gerenciado com React hooks
- Integração com API do backend Python
- Tratamento de erros robusto

## 🔗 Integração com Backend

A aplicação se conecta com o servidor Python através da API REST:

- **Endpoint**: `POST http://localhost:5000/converter`
- **Payload**: FormData com arquivo e formato de destino
- **Resposta**: JSON com arquivo convertido em base64

## 📱 Responsividade

A interface é totalmente responsiva e funciona em:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Próximos Passos

- [ ] Implementar autenticação de usuários
- [ ] Adicionar histórico de conversões
- [ ] Suporte a conversão em lote
- [ ] Preview de arquivos antes da conversão
- [ ] Configurações avançadas de conversão
- [ ] Temas claro/escuro
- [ ] PWA (Progressive Web App)
