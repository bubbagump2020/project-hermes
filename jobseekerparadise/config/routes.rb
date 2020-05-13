Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/users', to: 'users#index'
  post '/users', to: 'users#new'
  get '/users/:id', to: 'users#show'
  delete '/users/:id', to: 'users#destroy'
  patch '/users/:id', to: 'users#update'
end
