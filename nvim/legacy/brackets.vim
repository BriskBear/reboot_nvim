" ================================= Insert Shortcuts ==================

  imap {<cr> {<cr>}<c-o><s-o>
  imap [<cr> [<cr>]<c-o><s-o>
  imap (<cr> (<cr>)<c-o>  
  imap (<space> (  )<c-o>F 
  imap [<space> [[  ]]<c-o>F 
  imap {<space> {  }<c-o>F 
  imap <<space> <  ><c-o>F 
  imap "" ""<esc>F"a
  imap '' ''<esc>F'a
  imap `` ``<esc>F`a
  imap ('( ('')<esc>F'a
  imap ( ()<esc>F(a
  imap [ []<esc>F[a
  imap { {}<esc>F{a
  imap < <><esc>F<a
  imap <<space> < 
  imap <%= <%=<space><space>%><c-o>F 
  imap <%<space> <%<space><space>%><c-o>F 
  imap \" \"\"<esc>F"a
  imap (s <esc>lmh`>a)<c-o>`h(  
  imap {s <esc>lmh`>a}<c-o>`h{  
  imap [s <esc>lmh`>a]<c-o>`h[  
  imap "s <esc>lmh`>a"<c-o>`h"  
  imap 's <esc>lmh`>a'<c-o>`h'  
  imap `s <esc>lmh`>a`<c-o>`h`  
  nmap <Leader>" mh/"<CR>x?"<CR>x`hh
  nmap <Leader>' mh/'<CR>x?'<CR>x`hh
  nmap <Leader>` mh/`<CR>x?`<CR>x`hh
  nmap <Leader>( mh/)<CR>x?(<CR>x`hh
  nmap <Leader>{ mh/}<CR>x?{<CR>x`hh
  nmap <Leader>[ mh/]<CR>x?[<CR>x`hh
  nmap <Leader>< mh/><CR>x?<<CR>x`hh

" ================================= Visual Wrappers ==================

  vmap s' <esc>`>a'<c-o>`<'<esc>v`>l
  vmap s" <esc>`>a"<c-o>`<"<esc>v`>l
  vmap s` <esc>`>a`<c-o>`<`<esc>v`>l
  vmap s[ <esc>`>a]<c-o>`<[<esc>v`>l
  vmap s( <esc>`>a)<c-o>`<(<esc>v`>l
  vmap s{ <esc>`>a}<c-o>`<{<esc>v`>l

