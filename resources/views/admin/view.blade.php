@extends('layouts.app')

@section('title')
    {{'Тестовое задание|Админка'}}
@endsection

@section('content')
    <div id="app">Загрузка...</div>
@endsection

@section('scripts')
    @parent
    <script src="{{ mix('js/app.js') }}"></script>
@endsection