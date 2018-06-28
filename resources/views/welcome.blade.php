@extends('layouts.app')

@section('title')
    {{'Тестовое задание|Главная'}}
@endsection

@section('styles')
    @parent

@endsection

@section('content')
    <div id="app">Загрузка...</div>
@endsection

@section('scripts')
    @parent
    <script src="{{ mix('js/app.js') }}"></script>
@endsection