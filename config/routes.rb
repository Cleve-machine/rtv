require 'sidekiq/web'

Rails.application.routes.draw do
  namespace :admin do
      resources :users
      resources :announcements
      resources :notifications
      resources :services

      root to: "users#index"
    end
  get '/privacy', to: 'page#privacy'
  get '/terms', to: 'page#terms'
  get '/tree', to: 'page#tree'
  get '/api/get_tree', to: 'api#getTree'
  post '/api/save_tree', to: 'api#saveTree', via: [:post]
  #match '/api/save_tree' => 'api#saveTree', via: [:get, :post]

  resources :notifications, only: [:index]
  resources :announcements, only: [:index]
  authenticate :user, lambda { |u| u.admin? } do
    mount Sidekiq::Web => '/sidekiq'
  end

  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }
  root to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
