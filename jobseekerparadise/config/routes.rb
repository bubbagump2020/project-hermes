Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api' do 
    post 'user_token' => 'user_token#create'
    resources :users, only: [:create, :update, :destroy]
    get '/users/:username', to: 'users#show'
  end
end
