import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favoritesKey = 'favorites';


  getFavorites(): any[] {
    const favorites = localStorage.getItem(this.favoritesKey);
    return favorites ? JSON.parse(favorites) : [];
  }


  addFavorite(product: any): void {
    const favorites = this.getFavorites();
    favorites.push(product);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }


  removeFavorite(productId: number): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(product => product.id !== productId);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }


  isFavorite(productId: number): boolean {
    const favorites = this.getFavorites();
    return favorites.some(product => product.id === productId);
  }
}
