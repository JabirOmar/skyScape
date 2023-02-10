class CountriesController < ApplicationController

    def index
        countries = Country.all
        render json: countries, except: [:created_at, :updated_at]
    end

end
