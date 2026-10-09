# Pós Udemy — Infra + Cloud + DevOps + Security

## Como usar
1. Extraia o ZIP para uma pasta.
2. Abra `index.html` no navegador. Não precisa instalar nada nem ter internet.
3. O progresso é salvo automaticamente no navegador usado (`localStorage`).
4. Use **Exportar backup** para salvar uma cópia JSON do progresso e **Importar backup** para recuperar.

## Arquivos
- `index.html`: estrutura do sistema
- `style.css`: aparência responsiva
- `script.js`: trilha, dados, navegação e salvamento

Os preços de cursos e faixas salariais são referências de planejamento, não cotações nem garantias. Reavalie os cursos mais próximos da data em que for estudar.

## Versão 2: o que mudou
- Novo módulo **Redes & Troubleshooting (CCNA)**, e CCNA/Network+ e LPIC-1/RHCSA na tabela de certificações.
- Progresso e projetos agora usam **IDs fixos** (não mais a posição), então dá para inserir módulos sem bagunçar o que está salvo. Dados da versão anterior são migrados automaticamente (o % manual antigo não é migrado).
- **Progresso calculado**: 70% pelo checklist do módulo (agora salvo) + 30% pelo status do projeto.
- Data do diário usa o **horário local** (antes usava UTC).
- Importação de backup validada e mesclada com os valores padrão.
- "Abrir módulo" no Dashboard agora abre a aba Trilha.
- Tema escuro e menu horizontal no celular.
- Acesso ao armazenamento isolado em `store` (início do `script.js`), ponto de troca para o Firebase do FNX.
