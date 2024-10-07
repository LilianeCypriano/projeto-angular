import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Produto } from '../models/produto.models';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-lista',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.css'
})

export class ProdutoListaComponent implements OnInit{
 produtos: Produto[] = [];

 constructor(private produtoService: ProdutoService){}

  ngOnInit(): void{
    this.produtos = this.produtoService.getProdutos()
  }

  deletarProduto(id:number): void {
    this,this.produtoService.deleteProduto(id);
    this.produtos = this.produtoService.getProdutos();
  }
}
