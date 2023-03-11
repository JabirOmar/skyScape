class CountriesController < ApplicationController

    def index
        countries = Country.all
        render json: countries, except: [:created_at, :updated_at]
    end

    def show
        countries = Country.find_by(id: params[:id])
        if countries
            render json: countries, except: [:created_at, :updated_at]
        else 
            render json: {error: "Country not found"}, status: 404
        end
    end

    def create
        country = Country.create(country_params)
        render json: country, status: :created
    end


    private

    def country_params
        params.permit(:countryName, :cityOne, :cityTwo, :cityThree, :nationality)
    end

end
